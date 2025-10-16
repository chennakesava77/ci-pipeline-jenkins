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
                sh '''
                    mkdir -p test-results
                    npx jest --ci --reporters=default --reporters=jest-junit
                '''
            }
            post {
                always {
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
