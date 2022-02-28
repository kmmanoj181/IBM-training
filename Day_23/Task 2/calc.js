const calc=(a,b,op)=>{
    if(op==='+') return (a+b);
    else if (op==='-') return (a-b);
    else if (op==='*') return (a*b);
    else if (op==='/') return (a/b);
    else return ('error');

};
module.exports=calc;