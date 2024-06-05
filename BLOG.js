function addPost() {
    const content = document.getElementById('post-content').value;
    if (content.trim() === '') {
        alert('Vui lòng nhập nội dung!');
        return;
    }
    const postContainer = document.createElement('div');
    postContainer.classList.add('post');

    const date = new Date();
    const dateString = date.toLocaleString();

    const postDate = document.createElement('div');
    postDate.classList.add('post-date');
    postDate.textContent = dateString;

    const postContent = document.createElement('div');
    postContent.classList.add('post-content');
    postContent.textContent = content;

    postContainer.appendChild(postDate);
    postContainer.appendChild(postContent);

    const posts = document.getElementById('posts');
    posts.insertBefore(postContainer, posts.firstChild);

    document.getElementById('post-content').value = '';
}
