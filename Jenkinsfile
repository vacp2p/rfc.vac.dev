#!/usr/bin/env groovy
library 'status-jenkins-lib@v1.9.24'

pipeline {
  agent { label 'linux' }

  options {
    disableConcurrentBuilds()
    /* manage how many builds we keep */
    buildDiscarder(logRotator(
      numToKeepStr: '20',
      daysToKeepStr: '30',
    ))
  }

  environment {
    GIT_COMMITTER_NAME = 'status-im-auto'
    GIT_COMMITTER_EMAIL = 'auto@status.im'
    INCLUDED_DIRS = 'codex,nomos,status,vac,waku'
    FETCH_MODE = 'git'
  }

  stages {
    stage('Install') {
      steps {
        script {
          nix.develop('yarn install')
        }
      }
    }

    stage('Scrape') {
      steps {
        script {
          nix.develop('yarn scrape', keepEnv: ['INCLUDED_DIRS','FETCH_MODE'])
        }
      }
    }

    stage('Build') {
      steps {
        script {
          nix.develop('yarn build')
          jenkins.genBuildMetaJSON('build/build.json')
        }
      }
    }

    stage('Publish') {
      steps {
        sshagent(credentials: ['status-im-auto-ssh']) {
          script {
            nix.develop("""
              ghp-import \
                -b ${deployBranch()} \
                -c ${deployDomain()} \
                -p build
            """, sandbox: false,
                 keepEnv: ['SSH_AUTH_SOCK'])
          }
        }
      }
    }

  }
  post {
    cleanup { cleanWs() }
  }
}

def isMasterBranch() { GIT_BRANCH ==~ /.*master/ }
def deployBranch() { isMasterBranch() ? 'deploy-master' : 'deploy-develop' }
def deployDomain() { isMasterBranch() ? 'rfc.vac.dev'   : 'dev-rfc.vac.dev' }
