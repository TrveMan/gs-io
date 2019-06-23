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
            steps {
                archiveArtifacts artifacts: 'dist/**',
                onlyIfSuccessful: true
            }  
        }
        stage('deploy artifact') {
            steps {
                sshPublisher(publishers: [sshPublisherDesc(configName: 'gs-io', transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: '', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: 'test/', remoteDirectorySDF: false, removePrefix: '', sourceFiles: '\'*.*\'')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])
            }  
        }
    }
}