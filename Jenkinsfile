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
                // Install all dependencies including devDependencies
                sh 'npm install --include=dev'
            }
        }

        stage('Run Tests') {
            steps {
                // Run tests and generate JUnit XML report
                sh 'npm test -- --ci --reporters=default --reporters=jest-junit'
            }
            post {
                always {
                    // Record JUnit test results in Jenkins
                    junit '**/test-results/junit.xml'
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
                // Archive the test report so you can download it later if needed
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
