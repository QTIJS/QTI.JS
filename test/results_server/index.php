<?php
  //
  // This PHP script implements a simple QTI "results server"
  // for demo/testing purposes. It just appends post data
  // to a file called "results.log"
  //
  $t = $_SERVER['REQUEST_TIME'];
  $ip = $_SERVER['REMOTE_ADDR'];
  $auth = $_SERVER['HTTP_AUTHORIZATION'];

  $report = "\n<report t=\"{$t}\" remote=\"{$ip}\" auth=\"{$auth}\"/>\n";
  file_put_contents('results.log', $report, FILE_APPEND);

  $data = file_get_contents('php://input');
  $data = str_replace("&lt;","<",$data);
  $data = str_replace("&gt;",">",$data);
  file_put_contents('results.log', $data, FILE_APPEND);
?>