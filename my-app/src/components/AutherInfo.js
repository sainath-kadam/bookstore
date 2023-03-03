import React from 'react';
import AuthorCard from './AuthorCard';

function AutherInfo() {
  const author = {
    name: 'J.K. Rowling',
    bio: 'J.K. Rowling is a British author and philanthropist. She is best known for writing the Harry Potter fantasy series, which has won multiple awards and sold more than 500 million copies, becoming the best-selling book series in history. Rowling has also written several other books for adults, including The Casual Vacancy and The Cuckoo\'s Calling.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/J._K._Rowling_2010.jpg',
    books: [
      { title: 'Harry Potter and the Philosopher\'s Stone' },
      { title: 'Harry Potter and the Chamber of Secrets' },
      { title: 'The Casual Vacancy' },
      { title: 'The Cuckoo\'s Calling' },
      { title: 'The Silkworm' }
    ]
  };

  return (
    <div>
      <AuthorCard name={author.name} bio={author.bio} image={author.image} books={author.books} />
    </div>
  );
}

export default AutherInfo;
