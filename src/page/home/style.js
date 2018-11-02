import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width:960px;
    margin:30px auto;
    overflow:hidden;
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