import ArticlePic from "../assets/article.jpg";

export function ModalArticleContent() {
  return (
    <>
      <h2 className='text-xl font-bold mb-4 text-purple-400'>
        Getting ahead in devops
      </h2>
      <a href='https:twitter.com' target='_blank' rel='noopener noreferrer'>
        <img src={ArticlePic} alt='' className='rounded-sm' />
      </a>
    </>
  );
}
