document.addEventListener('DOMContentLoaded', () => {
    const chatBtn = document.getElementById('chat-btn');
    const forumBtn = document.getElementById('forum-btn');
    const chatSection = document.getElementById('chat-section');
    const forumSection = document.getElementById('forum-section');

    const chatBox = document.getElementById('chat-box');
    const forumBox = document.getElementById('forum-box');
    const chatInput = document.getElementById('chat-input');
    const forumTitle = document.getElementById('forum-title');
    const forumContent = document.getElementById('forum-content');
    const chatSend = document.getElementById('chat-send');
    const forumPost = document.getElementById('forum-post');

    const chatMessages = [];
    const forumPosts = [];

    function switchApp(app) {
        if (app === 'chat') {
            chatSection.classList.add('visible');
            forumSection.classList.remove('visible');
        } else {
            chatSection.classList.remove('visible');
            forumSection.classList.add('visible');
        }
    }

    chatBtn.addEventListener('click', () => switchApp('chat'));
    forumBtn.addEventListener('click', () => switchApp('forum'));

    function renderChat() {
        chatBox.innerHTML = chatMessages.map(msg => `<p>${msg}</p>`).join('');
    }

    function renderForum() {
        forumBox.innerHTML = forumPosts.map(post => 
            `<div><h3>${post.title}</h3><p>${post.content}</p></div>`
        ).join('');
    }

    chatSend.addEventListener('click', () => {
        const message = chatInput.value;
        if (message) {
            chatMessages.push(message);
            chatInput.value = '';
            renderChat();
        }
    });

    forumPost.addEventListener('click', () => {
        const title = forumTitle.value;
        const content = forumContent.value;
        if (title && content) {
            forumPosts.push({ title, content });
            forumTitle.value = '';
            forumContent.value = '';
            renderForum();
        }
    });

    switchApp('chat');
});
