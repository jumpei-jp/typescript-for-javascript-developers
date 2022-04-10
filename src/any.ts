import axios from 'axios';

export {};

let url: string = 'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

axios.get(url).then(function (response) {
    //具体的なオブジェクトに対しての型をつけれる interface
    interface Article{
      id: number;
      title: string;
      description: string;
    }
    let data: Article[] = response.data;
    console.log(data);
  })