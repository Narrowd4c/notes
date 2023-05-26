# Git 
[為你自己學Git 高見龍](https://gitbook.tw/)  
[git learn](https://learngitbranching.js.org/?locale=zh_TW)   
[git me cmd](https://www.gitmecmd.xyz/)   

0fee6423c1599587e40e25ecb0b139800f917762


new 4d59bcd22606c9fb420257ede64f95bf8f7fbc1f
#### 目標
學會 git 指令包含: config, log, branch, add, commit, checkout, rebase, merge, fetch, pull, push, stash, reset

## git config
+ 設定 git 環境 
$ git config --global user.name "Eddie Kao"
$ git config --global user.email "eddie@5xruby.tw"

+ 列出設定
$ git config --list
不管是透過終端機指令或是圖形介面工具做的設定，所有 Git 相關的設定，預設會在自己帳號(User)下的 .gitconfig 這個檔案裡，所以使用一般的文字編輯器，直接手動修改這個檔案也會有一樣的效果

+ 單一專案設定 名稱
$ git config --local user.name Sherly
$ git config --local user.email sherly@5xruby.tw

+ 更換編輯器
git config --global core.editor "code --wait"  //vscode

+ 打開 .gitconfig 環境設定檔
git config --global -e
+ 設定指令縮寫
  這些 Alias 的設定，也可直接到 ~/.gitconfig 裡修改
$ git config --global alias.co checkout
$ git co branchName
    - 加參數的指令
    $ git config --global alias.l "log --oneline --graph"
    $ git l
## git add
git add .  把檔案加至暫存區  

git add -p index.html
當使用 git add 的時候加上 -p 參數後，Git 會問說是不是要把這個區塊（hunk）加到暫存區，如果選 y 就是整個檔案加進去。但因為我只想送出部份內容，所以選擇了 e 選項。
出現編輯器刪掉不需要的部分

git status 查看暫存區狀態  


## git commit

git commit -m "..." 暫存區的內容移往儲存庫  
+ 不更動任何東西，但要 commit
    + git commit --allow-empty -m "空的" 
+ git commit --amend  //修改一次的 commit
+ git commit --amend --no-edit  // --no-edit 參數的意思是指「我不要編輯 Commit 訊息」
+ git commit -a -m "update content" 
    + -a 是指 add 
要注意的是這個 -a 參數只對已經存在 Repository 的檔案有效，對還是新加入的檔案（也就是 Untracked file）是無效的。

刪除檔案/修改檔案名稱 
1. git rm hello.html
2. git mv hello.html world.html
Git 是根據檔案的「內容」去算出那個 SHA-1 的值，所以 Git 不是很在乎你的檔案叫什麼名字，只在乎檔案的內容是什麼。所以當你進行更改檔名的時候，Git 並沒有為此做出一個新的 Blob 物件，而僅是指向原來舊的那顆 Blob 物件。但因為檔名變了，所以會為此做出一顆新的 Tree 物件喔。


修改 Commit 紀錄 
***盡量不要再 push 之後修改 commit ***
1. [使用 git rebase 來修改歷史。 (可修改更早的紀錄)](https://gitbook.tw/chapters/rewrite-history/change-commit-message)
2. 先把 Commit 用 git reset 拆掉，整理後再重新 Commit。
3. 使用 --amend 參數來修改最後一次的 Commit。

追加檔案到最近一次的 Commit
**請儘量不要使用在已經 Push 出去的 Commit 上**
1. git add . 
   git add -f 檔案名稱 
   git commit --amend (--no-edit) 

2. git reset 

+ git 查看某次commit的修改内容

1、首先，需要通过git log打印所有commit记录

2、找到你想查看的那次 commit 的 commit id。

3、查看修改。

git show commit Id

4、查看某次commit中具体某个文件的修改：
git show commit Id fileName

***git 無法 commit 空目錄(檔案夾)***

## .gitignore
在 .gitignore 之前建立的檔案無法處理，如果想套用 .gitignore 的規則，就必須先使用 git rm --cached main.go
git rm --cached 不會真的刪掉檔案，他會回到工作目錄上，並且不會被追蹤 (Untracked)。
## git branch
+ 分支改名
git branch -m 舊 新
git branch -m master main
+ 分支刪除
git branch -d name 如有未完全合併的內容會跳錯誤
git branch -D name
+ 不小心把還沒合併的分支砍掉
> 分支只是一個指向某個 Commit 的指標，刪除這個指標並不會造成那些Commit 消失。
重新接回去
git branch new commitName

## git checkout

$ git checkout <檔案名稱> 回復到上一次 commit 的狀態 (可以將刪除的檔案拉回來或取消修改)
$ git checkout .  // 全部檔案
+ 切換分支
$ git checkout branch-name 
+ 創建並切換 HEAD 到該分支
$ git checkout -b branch-name

## git merge
合併分支
假設現在在 master
分支合併到當前 HEAD
```
git checkout -b kamui

git commit -m "commit-one"
git commit -m "commit-two"

git checkout master

git merge kamui

git merge cat --no-ff //不快轉

```

## git rebase
[直接看](https://gitbook.tw/chapters/branch/merge-with-rebase)
把當前的 Head 接到另一條分支後
我(就是 bugFix 分支)，我現在要重新定義我的參考基準，並且將使用 main 分支當做我新的參考基準

假設 HEAD 目前在 main
```
$ git checkout -b bugFix
$ git commit -m ""
$ git checkout main
$ git commit
$ git checkout bugFix
$ git rebase main
```

+ 怎麼取消 rebase？ 
git reset HEAD^ --hard 只會回到前一個 commit 而非 rebase 前的 commit
    - 使用 Reflog 查詢
        git reset b174a5a --hard
    - 使用 ORIG_HEAD
        在 Git 有另一個特別的紀錄點叫做 ORIG_HEAD，這個 ORIG_HEAD 會記錄「危險操作」之前 HEAD 的位置。例如分支合併或是 Reset 之類的都算是所謂的「危險操作」。透過這個紀錄點來取消這次 Rebase 相對的更簡單：
        git reset ORIG_HEAD --hard
## git log 
git log --oneline --graph
+ 想要找某個人或某些人的 Commit…  
    $ git log --oneline --author="Sherly"
    
+ 從 Commit 訊息裡面搜尋符合字樣的內容
    $ git log --oneline --grep="Wilson"
    
+ 可以找出「今天早上 9 點到 12 點之間所有的 Commit」。
    $ git log --oneline --since="9am" --until="12am"
    $ git log --oneline --since="9am" --until="12am" --after="2017-01"
    
+ 如果只想檢視單一檔案的紀錄，只要在 git log 後面接上那個檔名
    $ git log <檔案名稱>
    
+ 檢視單一檔案做了哪些修改
    $ git log -p <檔案名稱>

## git blame 找出這段程式是誰寫的
    
git blame (-L 5,10) index.html   行數 5~10
    
## git reset
Reset 這個英文單字的翻譯是「重新設定」，但事實上 Git 的 Reset 指令用中文來說比較像是「前往」或「變成」，也就是「go to」或「become」的概念。當執行這個指令的時候( 所有的commit 都還在暫時看不到)
### 相對
- git reset head~1
- git reset head^
    (head^^^^^ 等於 head~5)
- git reset commitName^
    退到 commit 的前幾個位置
### 絕對
- git reset commitName
    退到該 commit
git reset commitName --mixed

reset --mixed (預設) 檔案會留在工作目錄，從暫存中丟掉
reset --soft 檔案會留在工作目錄與暫存區
reset --hard 都丟掉
    
+ 後悔 reset 或是 reset --hard
    如 git reset 某commit --hard
    
用 git reflog 看 HEAD 的移動紀錄
+ git reflog 
+ git log 如果加上 -g 參數，也可以看到 Reflog
> Reflog 預設會保留 30 天，所以 30 天內應該都還找得到。


## git fetch
+ 單純想確認遠端數據庫的內容，可以想成 把 pull = merge + fetch
+ [fetch 過程](https://gitbook.tw/chapters/github/pull-from-github)
    
## git stash
[reference link](https://ithelp.ithome.com.tw/articles/10220982)
假如今天我們在做 A 專案的時候，突然有人請你幫忙修改 B 專案的功能時，這時候該怎麼辦呢？ 我 A 專案 coding 到一半又不能做 commit !


+ 暫存儲存當前目錄
    git stash (save) 
+ 瀏覽 git stash 列表
    git stash list  
+ 還原暫存
    git stash pop // 最新的
    git stash pop stash@{0} // 透過 list 看回到哪一個 
+ 清除最新暫存
    git stash drop  
+ 清除全部暫存
    git stash clear  

## git remote

[remote](https://git-scm.com/book/zh-tw/v2/Git-%E5%9F%BA%E7%A4%8E-%E8%88%87%E9%81%A0%E7%AB%AF%E5%8D%94%E5%90%8C%E5%B7%A5%E4%BD%9C)
## git push
$ git push origin master:master

意思是「把本地的 master 分支推上去後，在 Server 上更新 master 分支的進度，或是如果不存在該分支的話，就建立一個 master 分支」。但如果你想推上去之後不要叫這個名字的話，可以把後面的那個名字改掉：

$ git push origin master:cat

這樣當把本地端的 master 分支推上去之後，就不會在線上建立 master 分支，而是建立（或更新進度）一個叫做 cat 的分支了。


## git pull
pull = merge + fetch
$ git pull --rebase
在 Fetch 完成之後，便會使用 Rebase 方式進行合併

--- 
## 其他
### git add --all , git add . 的差別
```
--all  整個專案(.git file)的異動加入到暫存區
.      當前目錄下的所有異動加入到暫存區
```
### 從過去的某個 Commit 再長一個新的分支

1. git checkout 657fce7
    發生 detached HEAD
2. git checkout -b newbranch

or 創建
 git branch newbranch 657fce7
or 創建並直接切換
 git checkout -b newbranch 657fce7

### 上傳大於100mb的文件要使用LFS(Large File Storage)
參考
1. [gitlab Git Large File Storage (LFS)](https://docs.gitlab.com/ee/topics/git/lfs/)
2. [github上传大文件 运维日记](https://zhuanlan.zhihu.com/p/102236112)

注意!! windows 上使用 LFS(Large File Storage) 建議直接用 git bash 不要使用 powershell 會報錯

```
batch request: git@github.com: Permission denied (publickey).: exit status 255+ 
```

$ git lfs install 
$ git lfs track "*.txt"
$ git add .
$ git commit -m
$ git push origin main

確保 .gitattributes 有在 commit 裡面

$ git lfs fetch origin main


### 修改歷史訊息
與 commit --amend 比較
[修改歷史訊息](https://gitbook.tw/chapters/rewrite-history/change-commit-message)
+ git rebase -i bb0c9c2
-i 參數是指要進入 Rebase 指令的「互動模式」，而後面的 bb0c9c2 是指這次的 Rebase 指令的應用範圍會「從現在到 bb0c9c2 這個 Commit」，也就是最一開始的那個 Commit。


git filter-branch --tree-filter "rm -f config/database.yml"