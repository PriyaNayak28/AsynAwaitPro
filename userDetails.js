const posts = [];
let lastUserActivityTime = null;

function createPost(title) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const post = { title };
            posts.push(post);
            console.log(`${title} created`);
            resolve(post);
        }, 2000);
    });
}

function deletePost(index) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts[index]) {
                const deletedPost = posts.splice(index, 1)[0];
                console.log(`${deletedPost.title} deleted`);
                resolve(deletedPost);
            } else {
                reject('Post not found');
            }
        }, 1000);
    });
}

function updateLastUserActivityTime() {
    return new Promise((resolve) => {
        setTimeout(() => {
            lastUserActivityTime = new Date();
            console.log('User activity time updated:', lastUserActivityTime);
            resolve(lastUserActivityTime);
        }, 1000);
    });
}

// Using Async/Await
async function managePosts() {
    try {
        const post1 = await createPost('Post One');
        await updateLastUserActivityTime();

        const post2 = await createPost('Post Two');
        await updateLastUserActivityTime();

        console.log('All Posts:', posts);
        console.log('Last User Activity Time:', lastUserActivityTime);

        const deletedPost = await deletePost(posts.length - 1);
        console.log('Remaining Posts:', posts);
    } catch (error) {
        console.error(error);
    }
}

managePosts();

// Using Promises
function getButter() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Husband got butter.');
            resolve('Butter');
        }, 2000);
    });
}

function getColdDrinks() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Husband got cold drinks.');
            resolve('Cold Drinks');
        }, 1000);
    });
}

getButter()
    .then((butter) => {
        return getColdDrinks();
    })
    .then((coldDrinks) => {
        console.log(`Husband got ${coldDrinks}`);
    })
    .catch((error) => {
        console.error(error);
    });

// Using Async/Await
async function getButterAndColdDrinks() {
    try {
        const butter = await getButter();
        const coldDrinks = await getColdDrinks();
        console.log(`Husband got ${coldDrinks}`);
    } catch (error) {
        console.error(error);
    }
}

getButterAndColdDrinks();


