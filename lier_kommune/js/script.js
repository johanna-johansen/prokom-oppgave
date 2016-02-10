/**
 *  @Project meta
 *  @description js implementation of Lier Kommune nettside
 *  @author johanna.ux.design@gmail.com
 *  @preserve Copyright 2013 Rayon AS
 *  @requires jQuery
 *  @version 1.0
 -----------------------------------------------------------*/
jQuery(document).ready(function($) {	
	
	if ($( window ).width() > 768){
		var heigtNav = $(".nav--primary .menu .menu-item ul").outerHeight( true );	
		$("#NavSec").css( "margin-top", heigtNav + 20);
	}
		
});