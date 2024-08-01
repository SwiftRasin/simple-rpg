class Wavy {

    constructor() {
        if (this instanceof Wavy) {
          throw Error('A static class cannot be instantiated.');
        }
    }
    /*
    getWavy(offset,type,speed,amt)
    
    offset: self-explanatory
    
    type: you can use "sin" or "cos"
    
    speed: small number is slow ( 1 ), big number is fast ( 5 ).
    
    amt: how far is it tweening your object?
    
    */
    static getWavy(offset, type, speed,amt)
    {
        var t = new Date().getTime() * speed;
        if (type == 'sin')
            return Math.sin(t / 200) * amt + offset;
        else if (type == "cos")
            return Math.cos(t / 200) * amt + offset;
        else if (type == "sqrt")
            return Math.sqrt(t / 200) * amt + offset;
    }

    /*
    advanced version. you can control the time now.
    
    getWavyAVD(offset,type,speed,amt)
    
    offset: self-explanatory
    
    type: you can use "sin" or "cos"
    
    speed: small number is slow, big number is fast.
    
    amt: how far is it tweening your object?
    
    time: what time is it? Default is `new Date().getTime()`
    
    */
    static getWavyAVD(offset, type, speed,amt, time)
    {
        var t = time/*new Date().getTime()*/ * speed;
        if (type == 'sin')
            return Math.sin(t / 200) * amt + offset;
        else if (type == "cos")
            return Math.cos(t / 200) * amt + offset;
        else if (type == "sqrt")
            return Math.sqrt(t / 200) * amt + offset;
    }
}