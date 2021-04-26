
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  // TOPの空タグを消したい時は<React.Fragment>か、短縮形の<>
  // class属性はclassNameと書く。for属性はhtmlForと書く。
  return (
    <div className="container-fluid">
      <h4>イベント作成フォームだよ</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">たいとる</label>
          <iput className="form-control" id="formEventTitle"></iput>
        </div>

        <div className="form-group">
          <label htmlFor="formEventBody">ぼでぃー</label>
          <iput className="form-control" id="formEventBody"></iput>
        </div>

        <button className="btn btn-primary">イベント作成するぞい</button>
        <button className="btn btn-danger">イベント削除でござる</button>
      </form>

      <h4>イベント一覧あるよ</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
          </tr>

        </thead>
        <tbody>

        </tbody>
      </table>

    </div>
  );
}

export default App;
