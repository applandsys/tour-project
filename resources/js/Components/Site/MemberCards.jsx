import { motion } from "framer-motion";

export default function MemberCards() {
    return (
        <div className="grid grid-cols-2 gap-4">
            <motion.img
                src="/images/member_card_one.jpeg"
                alt="Member Card 1"
                className="w-full h-auto rounded-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
            />
            <motion.img
                src="/images/member_card_2.jpeg"
                alt="Member Card 2"
                className="w-full h-auto rounded-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ scale: 1.05, rotate: -2 }}
            />
        </div>
    );
}
