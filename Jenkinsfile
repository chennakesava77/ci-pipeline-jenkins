pipeline {
  agent any

  environment {
    // Make sure Node modules binaries are available
    PATH = "${env.WORKSPACE}/node_modules/.bin:${env.PATH}"
  }

  stages {
    stage('Checkout') {
      steps {
        git 'https://github.com/chennakesava77/ci-pipeline-jenkins.git'
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm install --include=dev'
      }
    }

    stage('Run Tests') {
      steps {
        // Ensure the reports folder exists
        sh 'mkdir -p reports/junit'
        // Run Jest with default + JUnit reporter
        sh 'npx jest --ci --reporters=default --reporters=jest-junit'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build' // replace with your build command
      }
    }

    stage('Archive Artifacts') {
      steps {
        archiveArtifacts artifacts: '**/build/**', fingerprint: true
      }
    }
  }

  post {
    always {
      // Match this path to jest-junit outputDirectory/outputName in jest.config.js
      junit 'reports/junit/junit.xml'
      echo '✅ Pipeline completed.'
    }
    failure {
      echo '❌ Build failed!'
    }
  }
}
