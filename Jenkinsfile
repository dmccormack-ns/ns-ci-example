pipeline {
  agent any
  stages {
    stage('Compile') {
      steps {
        echo 'Building..'
      }
    }
    stage('Unit Test') {
      steps {
        echo 'Testing..'
      }
    }
    stage('Deploy Dev') {
      steps {
        echo 'Deploying....'
      }
    }
    stage('Functional Test') {
      steps {
        parallel(
          "Functional Test": {
            echo 'Functional Test'
            
          },
          "UI Test": {
            echo 'Unit Test'
            
          }
        )
      }
    }
    stage('Deploy Sandbox 1') {
      steps {
        parallel(
          "Deploy Sandbox 1": {
            echo 'Deploy Sandbox 1'
            
          },
          "Deploy Sandbox 2": {
            echo 'Sandbox 2'
            
          }
        )
      }
    }
  }
}