import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
    try {
        // Extract the Authorization header
        const authHeader = req.headers.authorization;
        
        // Check if the token exists
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ success: false, message: "Not Authorized. Please log in again." });
        }

        // Extract the token
        const token = authHeader.split(" ")[1];
        
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Attach user ID to request object
        req.body.userId = decoded.id;

        // Proceed to the next middleware/controller
        next();
    } catch (error) {
        console.error("JWT Error:", error.message);
        res.status(401).json({ success: false, message: "Invalid or expired token." });
    }
};

export default authMiddleware;
