pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        git branch: 'main', url: 'https://github.com/chennakesava77/ci-pipeline-jenkins.git'
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Run Tests') {
      steps {
        sh 'npm test -- --config jest.config.js'
      }
    }

    stage('Build') {
      steps {
        echo 'Build step placeholder'
      }
    }

    stage('Archive Artifacts') {
      steps {
        archiveArtifacts artifacts: 'coverage/**', allowEmptyArchive: true
      }
    }
  }

  post {
    always {
      junit 'test-results/junit.xml'
      echo '✅ Pipeline completed.'
    }
    failure {
      echo '❌ Build failed!'
    }
  }
}