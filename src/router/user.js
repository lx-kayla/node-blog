const handleUserRouter = (req, res) => {
	const method = req.method;
	const url= req.url;
    const path = url.split('?')[0];
    
    // 登录
    if(method === 'post' && path === '/api/user/login'){
        return {
            msg: '这是登录接口'
        }
    }
}

module.exports = handleUserRouter;