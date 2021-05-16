import React from 'react';
import Tables from '../Table/Tables';
import Spinner from '../../spinner/Spinner';

const Display = (props) => {
  const { selectedTag, articles } = props;

    const visible = () => {
      if (articles.length !== 0){
      return (
        <div className="jumbotron">
          <div className="container">
            {articles.map((article) => {
              return (
                <Tables
                  key={article.id}
                  selectedTag={selectedTag}
                  article={article}
                />
              );
            })}
          </div>
        </div>
      );
    } else {
      return <Spinner />
    }
  }
  return (<>{visible()}</>)
}

export default Display;
