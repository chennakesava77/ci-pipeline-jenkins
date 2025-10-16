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
                sh 'npm install --include=dev'
            }
        }

        stage('Run Tests') {
            steps {
                // Use npx so jest-junit is correctly found
                sh 'npx jest --ci --reporters=default --reporters=jest-junit'
            }
            post {
                always {
                    // Make sure this matches the jest-junit output
                    junit 'test-results/junit.xml'
                }
            }
        }

        stage('Build') {
            steps {
                echo 'Building the application...'
            }
        }

        stage('Archive Artifacts') {
            steps {
                archiveArtifacts artifacts: '**/test-results/junit.xml', fingerprint: true
            }
        }
    }

    post {
        success {
            echo '✅ Build succeeded!'
        }
        failure {
            echo '❌ Build failed!'
        }
    }
}
