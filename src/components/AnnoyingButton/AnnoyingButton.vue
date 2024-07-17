<template>
  <div class="app-container" ref="appContainer">
    <button 
      v-if="!proceeded"
      @mouseover="moveButton" 
      @click="attemptClick" 
      :style="buttonStyle" 
      class="annoying-button">
      Click Me!
    </button>
    <div v-if="showMessage" class="message">
      {{ message }}
    </div>
    <div v-if="proceeded" class="confirmation-message">
      Click confirmed! Well done!
    </div>
  </div>
</template>

<script>
import { questions } from '../../questions';

export default {
  data() {
    return {
      showMessage: false,
      message: '',
      buttonStyle: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      },
      questions: questions,
      questionIndex: 0,
      buttonMoving: false,
      proceeded: false,
    };
  },
  methods: {
    moveButton() {
      if (!this.buttonMoving && this.questionIndex < this.questions.length) {
        this.buttonMoving = true;
        setTimeout(() => {
          const appContainer = this.$refs.appContainer;
          const appWidth = appContainer.clientWidth;
          const appHeight = appContainer.clientHeight;
          const buttonWidth = 100;
          const buttonHeight = 50;
          const margin = 30;

          const newTop = Math.random() * (appHeight - buttonHeight - 2 * margin) + margin + 'px';
          const newLeft = Math.random() * (appWidth - buttonWidth - 2 * margin) + margin + 'px';
          
          this.buttonStyle = {
            ...this.buttonStyle,
            top: newTop,
            left: newLeft,
          };
          this.buttonMoving = false;
        }, 300);
      }
    },
    attemptClick() {
      if (Math.random() > 0.5) {
        this.handleClick();
      } else {
        this.moveButton();
      }
    },
    handleClick() {
      if (this.questionIndex < this.questions.length) {
        this.message = this.questions[this.questionIndex];
        this.showMessage = true;
        this.questionIndex++;
        setTimeout(() => {
          this.showMessage = false;
        }, 2000);
      } else if (!this.proceeded) {
        this.proceeded = true;
        this.showMessage = false;
      }
    },
    resetButton() {
      this.questionIndex = 0;
      this.proceeded = false;
      this.buttonStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      };
    }
  }
};
</script>

<style src="./AnnoyingButton.css"></style>
