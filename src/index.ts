import { App } from './components/app/app.js';

(() => {
    document.addEventListener('DOMContentLoaded', () => {
        try {
            new App();
        } catch (error) {
            let message = 'Unknown Error';
            if (error instanceof Error) message = error.message;
            else message = String(error);
        }
    });
})();
