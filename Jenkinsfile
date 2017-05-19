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
            echo 'Test'
            
          }
        )
      }
    }
    stage('Functional Test SB1') {
      steps {
        parallel(
          "Functional Test SB1": {
            echo 'Functional Test SB1'
            
          },
          "Functional Test SB2": {
            echo 'Functional Test SB2'
            
          },
          "UI Test SB1": {
            echo 'Unit Test SB1'
            
          },
          "UI Test SB2": {
            echo 'UI Test SB2'
            
          }
        )
      }
    }
    stage('Publish Results') {
      steps {
        echo 'Publish'
      }
    }
  }
}