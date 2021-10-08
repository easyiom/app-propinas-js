<?php

function CalcProp($a,$b,$c){
    $result= ($a*$c)/$b;
    setcookie("tip", "", time() - 31536010010, "/");
    setCookie('tip', $result, time()+31536010, "/");
    header("Location:../index.php?");
} 


if(isset($_POST["enviar"])){
    $valor=$_POST["valoracion"];
    $num1=$_POST["numero1"];
    $num2=$_POST["personas"];
    if(is_numeric($num1)==false||is_numeric($num2)==false||$num1==0||$num2==0){
        setcookie("tip", "", time() - 3153600000, "/");
        setCookie('tip', "Introduce datos validos", time()+30000, "/");
        header("Location:../index.php");
    }else{
        CalcProp($num1,$num2,$valor);
    }
}
else{

    header("Location:../index.php");
}


