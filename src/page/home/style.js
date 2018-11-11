import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width:960px;
    margin:30px auto;
    overflow:hidden;
	a{
		color:#333;
		text-decoration:none;
	}
`;


export const HomeLeft = styled.div`
    float:left;
    width:625px;
    .banner-img {
		width: 625px;
		height: 270px;
	}
`;


export const HomeRight = styled.div`
    width: 280px;
	float: right;
`;

export const TopicWrapper = styled.div`
    overflow: hidden;
	padding: 20px 0 10px 0;
	margin-left: -18px;
	border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
    float: left;
	height: 32px;
	line-height: 32px;
	margin-left: 18px;
	margin-bottom: 18px;
	padding-right: 10px
	background:#f7f7f7;
	font-size:14px;
	color: #000;
	border: 1px solid #dcdcdc;
	border-radius: 4px;
	.topic-pic {
		display: block;
		float: left;
		width: 32px;
		height: 32px;
		margin-right: 10px;
	}
`;


export const Homelist = styled.div`
	
	width: 100%;
	margin: 0 0 15px;
	word-wrap: break-word;
	height:auto;
	box-sizing:border-box;
	border-bottom: 1px solid #f0f0f0;
`;

export const ListItem = styled.div`
	padding: 15px 2px 20px 0;
    position: relative;
	height:auto;
	border-bottom: 1px solid #f0f0f0;
	.pic{
		width:125px;
		height:100px;
		border-radius:4px;
		position:absolute;
		right:0;
		top:50%;
		margin-top:-50px;
	}
	.content{
		margin-right:135px;
		padding-top:15px;
		font-size:14px;
		h3{
			margin: -7px 0 4px;
			display: inherit;
			font-size: 18px;
			font-weight: 700;
			line-height: 1.5;
		}
		p{
			line-height:1.5;
			color:#888;
		}
		.comment{
			color: #bbb;
			margin-top:10px;
			span{
				padding:0 10px;
			}
		}
	}
	
`;

export const RecommeWapper= styled.div`
   width:100%;
   
`;
export const RecommeList= styled.div`
	cursor:pointer;
	height:50px;
   margin-bottom:6px;
   border-radius:4px;
	background:url(${(props)=>(props.imgUrl)});
	background-size:contain;

`;

export const ListMore= styled.div`
	cursor:pointer;
	width:80%;
	height:50px;
	line-height:50px;
	text-align:center;
	background:darkgoldenrod;
   margin-bottom:6px;
   border-radius:4px;
   color:#fff;
	margin-top:20px;
	margin-bottom:20px;

`;

export const  Totop = styled.div`
	position:fixed;
	width:80px;
	height:80px;
	font-size:14px;
	right:100px;
	bottom:50px;
	background:#333;
	text-align:center;
	line-height:80px;
	color:#fff;
	cursor:pointer;

`;