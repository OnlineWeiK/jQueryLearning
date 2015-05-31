<?php
/**
 * Created by IntelliJ IDEA.
 * User: wk
 * Date: 2015/5/31
 * Time: 17:52
 */
if(isset($_GET['name'])){
    echo "hello:".$_GET['name'];
}else{
    echo "Args Error!";
}