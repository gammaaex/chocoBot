var ConsecutiveChecker = (function(){

    // コンストラクタ
    var ConsecutiveChecker = function(){
        //id(ユーザ名)と時間をストックしておく配列
        this.idAndTsArray = [];
    };
    
    ConsecutiveChecker.prototype.run = function(id,ts,time){ 
        var index = this.checkID(id);
        
        if(index >= 0){
            if(this.checkTs(index,ts,time)){
                this.removeArrayElement(index);
                this.setArray(id,ts);
                return true;
            }else{
                return false;
            }
        }else{
            this.setArray(id,ts);
            return true;
        }
    };
    
    // 行動した人物が存在するかチェックする
    ConsecutiveChecker.prototype.checkID = function(id){
        var array = this.getArray();
        
        for(var i=0; i<array.length; i++){
            if(id == array[i][0]){
                return i;
            }
        }
        return -1;
    };
    
    // 指定時間以内に行動されていないかチェックする
    ConsecutiveChecker.prototype.checkTs = function(index,ts,sec){
        var array = this.getArray();

        if(ts - array[index][1] > sec){
            return true;
        }else{
            return false;
        }
    };

    // idAndTsArrayのgetter
    ConsecutiveChecker.prototype.getArray = function(){
        return this.idAndTsArray;
    };

    // idAndTsArrayのsetter
    ConsecutiveChecker.prototype.setArray = function(id,ts){
        this.idAndTsArray.push([id,ts]);
    };

    // idAndTsArrayの指定されたインデックスの要素を削除する
    ConsecutiveChecker.prototype.removeArrayElement = function(index){
        this.idAndTsArray.splice(index,1);
    }
    
    return ConsecutiveChecker;
}());