// import jwt from 'jsonwebtoken'

// const userAuth = async (req, res, next) => {
// 	const { token } = req.headers;

// 	if(!token) {
// 		return res.json({ success: false, message: 'Not Authorized. Login Again' })
// 	}

// 	try {
// 		const tokenDecode = jwt.verify(token, process.env.JWT_SECRET)

// 		if(tokenDecode.id) {
// 			req.body.userId = tokenDecode.id;
// 		} else {
// 			return res.json({ success: false, message: 'Not Authorized. Login Again' })
// 		}

// 		next();
// 	} catch (error) {
// 		console.log(error);
// 		res.json({ success: false, message: error.message })
// 	}
// }

// export default userAuth;



import jwt from 'jsonwebtoken';

const userAuth = async (req, res, next) => {
  const token = req.headers.token || req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ success: false, message: 'Token missing. Not authorized' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded?.id) {
      return res.status(401).json({ success: false, message: 'Invalid token' });
    }

    req.userId = decoded.id; // Attach to req.userId instead of body
    next();
  } catch (error) {
    console.error('JWT Error:', error.message);
    res.status(401).json({ success: false, message: 'Token expired or invalid' });
  }
};

export default userAuth;
