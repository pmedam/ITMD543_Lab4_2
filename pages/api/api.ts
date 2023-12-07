export const getServerSideProps = async () => {
    const postsRes = await fetch('https://raw.githubusercontent.com/pmedam/ITMD543_JsonPlaceholder/main/db.json');
    const posts = await postsRes.json();
    console.log(posts);
  

    return {
      props: {
        posts
      },
    };
  };