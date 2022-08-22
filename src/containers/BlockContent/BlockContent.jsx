import React from 'react';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import './BlockContent.css';


const products = [
	{
		title: 'LeBron James Lakers City Edition',
		description: 'Nike NBA Swingman Jersey',
		price: '$290',	
        img: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b093663e-817f-44d0-8cd3-5d53905c1a62/air-jordan-1-retro-high-og-shoes-79vGWV.png',
	},
	{
		title: 'Chicago Bulls',
		description: 'Nike NBA ',
		price: '$1290',
		img: 'https://myalpins.com/1529-thickbox_default/%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD%D1%8B-nike-air-jordan-1-mid-%D1%87%D0%B5%D1%80%D0%BD%D0%BE-%D0%B1%D0%B5%D0%BB%D1%8B%D0%B9.jpg',
	},
	{
		title: 'Chicago Bulls',
		description: 'Nike NBA ',
		price: '$1290',
		img: 'https://img01.ztat.net/article/spp-media-p1/32f10a9fe96549d99779d3d3c21dd4e9/94efed2cfbde4080940ab2cfba80e74c.jpg?imwidth=1800&filter=packshot',	
	},
	{
		title: 'Chicago Bulls',
		description: 'Nike NBA ',
		price: '$1290',
		img: 'https://img01.ztat.net/article/spp-media-p1/c21fb6dcafcc4a84aedc7474a06b67e9/e103a08b2dcf403bb548a49a96ee066c.jpg?imwidth=762&filter=packshot',
	},
    {
		title: 'LeBron James Lakers City Edition',
		description: 'Nike NBA Swingman Jersey',
		price: '$290',	
        img: 'https://img01.ztat.net/article/spp-media-p1/a08a41ba93263335a9d90a67cef44c8e/7c93c48ddb974a5ebcaec9563bf90134.jpg?imwidth=762&filter=packshot',
	},
	{
		title: 'Chicago Bulls',
		description: 'Nike NBA ',
		price: '$1290',
		img: 'https://img01.ztat.net/article/spp-media-p1/7b7fd752870f3c4489e299cbb17e3dd4/025fb31d5bf94a18848ad98076366ca6.jpg?imwidth=1800&filter=packshot',
	},
	{
		title: 'Chicago Bulls',
		description: 'Nike NBA ',
		price: '$1290',
		img: 'https://img01.ztat.net/article/spp-media-p1/e6405d8b159130b0afb6d096a406ff8a/e11de378b0084ba0824d5899cbcb3db2.jpg?imwidth=762&filter=packshot',	
	},
	{
		title: 'Chicago Bulls',
		description: 'Nike NBA ',
		price: '$1290',
		img: 'https://img01.ztat.net/article/spp-media-p1/6598af14fcfb4fa7b3ae7d5bf2be7961/65b19f6042c441769683bb7ed18e3717.jpg?imwidth=762&filter=packshot',
	},
    {
		title: 'LeBron James Lakers City Edition',
		description: 'Nike NBA Swingman Jersey',
		price: '$290',	
        img: 'https://img01.ztat.net/article/spp-media-p1/2ae9f1446ccf4cf7bc83b6e28b58b644/764be331e6a5483bbea649dc9f86e0c9.jpg?imwidth=762&filter=packshot',
	},
	{
		title: 'Chicago Bulls',
		description: 'Nike NBA ',
		price: '$1290',
		img: 'https://img01.ztat.net/article/spp-media-p1/ef4c84c69bab4876accccfada749c5f5/07a5e21950ec4ab093f785447da0e133.jpg?imwidth=762&filter=packshot',
	},
	{
		title: 'Chicago Bulls',
		description: 'Nike NBA ',
		price: '$1290',
		img: 'https://img01.ztat.net/article/spp-media-p1/22374ca72fb93298b4a6e84c2d36dbe7/47f4aa92e29b4446a59f21bc1d29236b.jpg',	
	},
	{
		title: 'Chicago Bulls',
		description: 'Nike NBA ',
		price: '$1290',
		img: 'https://img01.ztat.net/article/spp-media-p1/e9bd6bf8be6b398ba2d686f30cf0e041/39474cbc56ad4c42a76f9d73ad427d14.jpg',
	}

]

const BlockContent = () => {
  return (
    <div className='container'>
        <div className='container-block'>
            <div className='content-block-two' >
                <p>Jerseys kobe bryant</p>
            </div>
            <div className='title-block-start-two'>
                <p>
                    <span className='color-yellow'>kobe </span> 
                    <span className='color-purple'>bryant</span> 
                </p>
            </div>
            <div className='title-block-end-two'>
                <p>Authentic edition</p>
            </div>
            <div className="text-content-block-two">
                <p>
                    <p>Kobe bryant: a basketball legend. bryant crafted a storied career</p> 
                    <p>In his 20 seasons with the lakers. the lagacy of kobe bryant was a far-reaching one.</p> 
                </p>
            </div>
            <div className="card-block">
                <div className="card-container">
                    {products.map(product => (
                        <Card
                            img={product.img}
                            title={product.title} 
                            description={product.description}
                            price={product.price} />
                    ))}
                </div>
            </div>
            <div className="button-block">
                <Button/>
            </div>
        </div>
    </div>
  );
}

export default BlockContent;