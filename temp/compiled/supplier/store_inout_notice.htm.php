<style type="text/css">
/*弹出层的STYLE*/
body {height:100%;}
.mydiv {
background:#ffffff;
text-align: center;
line-height: 40px;
font-size: 12px;
font-weight: bold;
z-index:10000001;
width: 650px;
height: auto;
left:50%;/*FF IE7*/
top: 50%;/*FF IE7*/
margin-left:-325px!important;/*FF IE7 该值为本身宽的一半 150 *2 =300 */
margin-top:-200px!important;/*FF IE7 该值为本身高的一半 60*2=120 */
margin-top:0px;
position:fixed!important;/*FF IE7*/
position:absolute;/*IE6*/
_top:       expressiondocument.compatMode &&
            document.compatMode=='CSS1Compat') ?
            documentElement.scrollTop + (document.documentElement.clientHeight-this.offsetHeight)/2 :/*IE6*/
            document.body.scrollTop + (document.body.clientHeight - this.clientHeight)/2);/*IE5 IE5.5*/

}
 .blank15{height:15px; line-height:8px; clear:both; visibility:hidden;}
.mydiv table{margin:0 auto;padding:0 auto;}
.mydiv tr{padding:0;margin:0;}
.mydiv td{height:10px;font-size:14px;font-weight:normal;padding:0;margin:0;}

.bg {
background-color: #a6a6a6;
width: 100%;
height: 100%;
left:0;
top:0;/*FF IE7*/
filter:alpha(opacity=70);/*IE*/
opacity:0.7;/*FF*/
z-index:10000000;
position:fixed!important;/*FF IE7*/
position:absolute;/*IE6*/
_top:       expressiondocument.compatMode &&
            document.compatMode=='CSS1Compat') ?
            documentElement.scrollTop + (document.documentElement.clientHeight-this.offsetHeight)/2 :/*IE6*/
            document.body.scrollTop + (document.body.clientHeight - this.clientHeight)/2);/*IE5 IE5.5*/

}
.qb_left{float:left;width:80%;text-align:left;color:#fff;font-size:15px;}
.qb_right{float:right;width:20%;background:#f4f4f4;height:40px;line-height:40px;text-align:right;border-bottom:1px solid #eee;}
.qb_right a{text-decoration:none;color:#ff5a00;}
/*The END*/

</style>
<script type="text/javascript">
function showDiv(rec_id, inout_status, action_val)
{
document.getElementById('popDiv').style.display='block';
document.getElementById('bg').style.display='block';
var form_inout_check = document.forms['inout_check'];
form_inout_check.elements['action_val'].value = action_val;
form_inout_check.elements['inout_status'].value = inout_status;
form_inout_check.elements['rec_id'].value = rec_id;
}

function closeDiv(){
document.getElementById('popDiv').style.display='none';
document.getElementById('bg').style.display='none';
var sels = document.getElementsByTagName('select'); 
 for (var i = 0; i < sels.length; i++) 
    {
		sels[i].style.visibility = '';     

    }
}




</script>


<div id="popDiv" class="mydiv" style="border:1px solid #bbb;display:none;">

<div class="qb_left" style="height:40px;line-height:40px;background:#f4f4f4;color:#000;font-size:16px;font-weight:bold;border-bottom:1px solid #eee;">&nbsp;&nbsp;填写备注</div><div class="qb_right" ><a href="javascript:closeDiv()" >关 闭</a>&nbsp;&nbsp;&nbsp;</div>
<div style="clear:both;"></div>
<form  method="post" name="pricecut_notice" id="inout_check" action="<?php if ($this->_var['script_file']): ?><?php echo $this->_var['script_file']; ?><?php else: ?>store_inout_in.php<?php endif; ?>" > 
<table cellpadding=0 cellspacing=0 width="90%" border=0>  
    <tr><td colspan=2 height=30>&nbsp;</td></tr>
    <tr> 
      <td valign="top" align="right">填写备注：</td> 
      <td  align="left"> <textarea rows=10 cols=60 name="note"></textarea></td> 
    </tr>   
    <tr> 
    <td></td>
      <td  align=left  style="padding:20px 0;"> 
	  <input type="hidden" value="" name="action_val" id="action_val">
	  <input type="hidden" value="" name="inout_status" id="inout_status">
      <input type="hidden" value="" name="rec_id" id="rec_id">
	  <input type="hidden" value="check_insert" name="act" >
      <input type="submit"  value="确定" > 
      </td>  
    </tr> </table> 

</form> 
</div>