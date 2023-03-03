import React from 'react';

function AuthorCard(props) {
  const { name, bio, image, books } = props;

  return (
    <>
    <div className='row'>
    <div class="col-md-4">
    <div className="card">
      <div class="col-md-6">
      <img src={image} className="card-img-top"   alt={name} />
      </div>
      <div class="col-md-18">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{bio}</p>
        <ul className="list-group list-group-flush">
          {books.map(book => (
            <li className="list-group-item" key={book.title}>{book.title}</li>
          ))}
        </ul>
      </div>
     
    </div>
    </div>
    </div>
    <div class="col-md-4">
    <div className="card">
      <div class="col-md-6">
      <img src={image} className="card-img-top"   alt={name} />
      </div>
      <div class="col-md-18">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{bio}</p>
        <ul className="list-group list-group-flush">
          {books.map(book => (
            <li className="list-group-item" key={book.title}>{book.title}</li>
          ))}
        </ul>
      </div>
     
    </div>
    </div>
    </div>
     <div class="col-md-4">
    <div className="card">
      <div class="col-md-6">
      <img src={image} className="card-img-top"   alt={name} />
      </div>
      <div class="col-md-18">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{bio}</p>
        <ul className="list-group list-group-flush">
          {books.map(book => (
            <li className="list-group-item" key={book.title}>{book.title}</li>
          ))}
        </ul>
      </div>
     
    </div>
    </div>
    </div>



    </div>
    
    
    
    
    </>
  );
}

export default AuthorCard;