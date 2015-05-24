library main.index_maker.money_div;

import 'dart:html';

import 'money_text_span.dart';
import 'reset_button.dart';

Element br_element = new Element.tag('br');
Element button_element = new Element.tag('button');
Element div_element = new Element.tag('div');
Element span_element = new Element.tag('span');


class MoneyDiv{
    static void main(){
        moneyDiv();
        MoneyTextSpan.main();
        addBr();
        ResetButton.main();
    }
    
    static void moneyDiv(){
        div_element = new Element.tag('div');
        div_element.setAttribute('ng-controller', 'chromeLoad as load');
        div_element.setAttribute('id', 'money-div');
        div_element.setAttribute('class', 'money');
        querySelector('#main-div').append(div_element);
    }
    
    static void addBr(){
        br_element = new Element.tag('br');
        querySelector('#money-div').append(br_element);
    }
}
