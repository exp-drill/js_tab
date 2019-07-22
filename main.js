window.addEventListener("load", function() {
  // タブのDOM要素を取得し、変数で宣言。
  let tabs = document.getElementsByClassName('menu_item');
	for(let i = 0; i < tabs.length; i++) {
    // タブメニューの中でクリックイベントが発生した場所を探し、下で定義したtabSwitch関数を呼び出す
    // ①`tabs[i].`の後に、イベントリスナーでクリックイベントが発生した時に、tabSwitch関数を呼び出す処理を書きましょう。
    tabs[i].
	}

  // クラスの切り替えをtabSwitch関数で定義
	function tabSwitch(){
    // 全てのactiveクラスのうち、最初の要素を取り除く（"[0]は、最初の要素の意味"）
		document.getElementsByClassName('active')[0].classList.remove('active');
    // クリックしたタブにactiveクラスを追加
    // ②`this.`の後に、classListを使用してactiveクラスを追加しよう
    this.
    // コンテンツの全てのshowクラスのうち、最初のshowクラスを削除
    // ③`document.getElementsByClassName('show')[0].`の後に、classListを使用してshowクラスを削除しよう
		document.getElementsByClassName('show')[0].
    
    //　tabsを配列に変換する
    tabs = Array.prototype.slice.call(tabs);
    
    // 何番目の要素がクリックされたかを、配列tabsから要素番号を取得
    const index = tabs.indexOf(this);
    // クリックしたcoutentクラスにshowクラスを追加する
    // ④`document.getElementsByClassName('content')[index].`の後に、classListを使用してshowクラスを追加しよう
		document.getElementsByClassName('content')[index].
	};
});
