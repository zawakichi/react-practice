import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css'

const MoneyBook = () => {
  const books = [
    {date: '1/1', item:'お年玉', amount:10000},
    {date: '1/3', item:'ケーキ', amount:-500}
  ];

  return (
    <div>
      <table className="book">
        <thead>
          <tr><th>日付</th><th>項目</th><th>入金</th><th>出金</th></tr>
        </thead>
        <tbody>
          {
            books.map( (book) => 
              <MoneyBookItem book={book} key={book.date + book.item} /> 
            )
          }
        </tbody>
      </table>
    </div>
  );
};

const MoneyBookItem = (props) => {
  const {date, item, amount} = props.book;
  if (amount > 0) {
    return (
      <tr>
        <td>{date}</td>
        <td>{item}</td>
        <td>{amount}</td>
        <td></td>
      </tr>
    );
  } else {
    return (
      <tr>
        <td>{date}</td>
        <td>{item}</td>
        <td></td>
        <td>{-amount}</td>
      </tr>
    );
  }
}

MoneyBookItem.propTypes = {
  bool: PropTypes.object.isRequired
}
ReactDOM.render(
  <MoneyBook />,
  document.getElementById('root')
);