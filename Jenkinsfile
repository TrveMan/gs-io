pipeline {
    agent { docker { image 'node:11.11.0' } }
    stages {
        stage('install') {
            steps {
                sh 'npm install'
            }
        }
        stage('lint') {
            steps {
                sh 'npm run lint'
            }
        }
        stage('build') {
            steps {
                sh 'npm run build'
            }
        }
    }
}