#!/usr/bin/env groovy
library 'status-jenkins-lib@v1.8.15'

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
  }

  stages {
    stage('Install') {
      steps {
        sh 'yarn install'
      }
    }

    stage('Scrape') {
      steps {
        sh 'yarn scrape'
      }
    }

    stage('Build') {
      steps { script {
        sh 'yarn build'
        jenkins.genBuildMetaJSON('build/build.json')
      } }
    }

    stage('Publish') {
      steps {
        sshagent(credentials: ['status-im-auto-ssh']) {
          sh """
          ghp-import \
              -b ${deployBranch()} \
              -c ${deployDomain()} \
              -p build
          """
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
