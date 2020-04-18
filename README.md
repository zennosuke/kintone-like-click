# kintone-like-click

kintoneのスペースのスレッドにコメントしているユーザーを指定して、  
画面上に表示されているそのユーザーの全てのコメントに「いいね！」をつけるChrome拡張です。

## How to deploy

最新のzipファイルをこちら https://github.com/zennosuke/kintone-like-click/releases/ からダウンロードして、  
zipファイルを解凍してください。

Chromeの拡張機能ページ右上の「デベロッパーモード」をONにして、  
Chromeの拡張ページの左上「パッケージ化されていない拡張機能を読み込む」から  
ダウンロードした「kintone-like-click」フォルダを選択します。  

kintoneのスペースのスレッド画面(以下のURLのページ上)で、  
kintone-like-clickのアイコンをクリックし、  
[サイトデータの読み取りと変更を行います] > [拡張機能をクリックした時]  
を選択して準備完了です。  

## How to use

kintoneのスペースのスレッド画面(以下のURLのページ上)で、  
kintone-like-clickのアイコンをクリックすると、  
画面左上「スレッドを追加」の右側にユーザー名を入力するフォームが現れます。  

```URL
https://{subdomain}.cybozu.com/k/#/space/{spaceId}/thread/{threadId}
```

ユーザー名を入力して「Like！」ボタンを押下すると、  
今表示されているスレッド上の該当のユーザーの全てのコメントが「いいね！」されます。  

さあ、どんどん「いいね！」しよう！  

