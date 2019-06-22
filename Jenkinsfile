pipeline {
    agent { docker { image 'node:11.11.0' } }
    environment {
        HOME = '.'
    }
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
                sh 'npm --version'
                sh 'npm run build'
            }
        }
        stage('create artifact') {
            archiveArtifacts artifacts: 'dist/**',
            onlyIfSuccessful: true
        }
    }
}