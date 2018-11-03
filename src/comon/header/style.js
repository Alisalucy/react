import styled from 'styled-components';
import logoPic from '../../static/logo.png';

// 以下是样式

// main主体样式
export const HeaderWrapper = styled.div`
    width:100%;
    height:56px;
    border:1px solid #f0f0f0;
    position:reletive;
    
`;

// logo
export const Logo = styled.div`
    position:absolute;
    top:0;
    left:0;
    display:block;
    width:100px;
    height:56px;
    background: url(${logoPic});
    background-size: contain;
    
`;

// nav
export const Nav = styled.div`
    width:960px;
    height:56px;
    padding-right:70px;
    box-sizing:border-box;
    margin:0 auto;
    
`;

export const NavItem = styled.div`
    height:56px;
    line-height:56px;
    padding: 0 15px;
    font-size:17px;
    color:#333;
    &.left{
        float:left;
    }
    &.right{
        float:right;
    }
    &.active{
        color:#ea6f5a;
    }
`;

export const SearchWrapper = styled.div`
   position:relative;
   float:left; 
   .zoom{
       position:absolute;
       right:5px;
       bottom:5px;
       width:30px;
       height:30px;
       border-radius:50%;
       text-align:center;
       line-height:30px;
       color:#ddd;
       &.focused{
        background:#777;
        color: #fff;
    }
   }
   
`;

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width:160px;
    height:38px;
    margin-top:9px;
    margin-left:20px;
    background:#eee;
    border-radius:19px;
    padding:0 30px 0 20px;
    outline:none;
    border:none;
    font-size:14px;
    box-sizing: border-box;
    &.focused{
        width:240px;
        padding-right:40px;
    }
    &::placeholder{
        color:#999;
    }
    &.slide-enter {
		transition: all 2s ease-out;
	}
	&.slide-enter-active {
        width:240px;
	}
	&.slide-exit {
		transition: all 2s ease-out;
	}
	&.slide-exit-active {
		width: 160px;
	}
    
`;

// 搜索
export const SearchInfo = styled.div`
     position:absolute;
     width:240px;
    left:0;
    top:56px;
    background:#fff;
    padding:0 20px;
    box-shadow: 0 0 8px rgba(0, 0, 0, .2);
`;
export const SearchInfoTitle = styled.div`
    margin:20px 0 15px 0;
    font-size:14px;
    color: #969696;
    line-height:20px;
`;

export const SearchInfoSwitch = styled.div`
   float:right;
   font-size:13px;
   cursor: pointer;
   .spin {
		display: block;
		float: left;
		font-size: 12px;
		margin-right: 2px;
		transition: all .2s ease-in;
		transform-origin: center center;
	}
`;

export const SearchInfoList = styled.div`
    overflow:hidden;
`;
export const SearchInfoItem = styled.a`
   cursor: pointer;
   display:inline-block;
   padding:5px 10px;
   border:1px solid #ddd;
   margin-right:10px;
   margin-bottom:10px;
   border-radius:3px;
   color: #787878;
   font-size:12px;
`;


// 按钮
export const Addition = styled.div`
   position:absolute;
    height:56px;
    right:0;
    top: 0;  
`;

export const Button = styled.div`
   line-height:38px;
   float:right;
   padding:0 20px;
   border-radius:19px;
   margin-top:9px;
   margin-right:20px;
   border: 1px solid #ec6149;
	font-size: 14px;

    &.reg{
        color: #ec6149;
    }
    &.writting{
        color: #fff;
		background: #ec6149;
    }
`;