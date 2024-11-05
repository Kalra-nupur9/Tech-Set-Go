import dbConnect from "@/app/utils/dbConnect";
import Subscriber from "@/app/models/Subscriber"; 

export default async function handler(req, res) {
    await dbConnect();
  
    if (req.method === 'POST') {
        const { email } = req.body;

        // Validate the email format
        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            return res.status(400).json({ message: 'Invalid email address' });
        }
  
        try {
            const newSubscriber = new Subscriber({ email });
            await newSubscriber.save();
  
            return res.status(201).json({ message: 'Subscription successful' });
        } catch (error) {
            console.error('Failed to save to database:', error);
            return res.status(500).json({ error: 'Failed to subscribe' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

  
