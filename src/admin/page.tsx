"use client";

import { useEffect, useState } from "react";
import { ContactMessage } from "../app/types/contact";

export default function AdminPage() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await fetch("/api/contact");
      if (response.ok) {
        const data = await response.json();
        setMessages(data.messages);
      }
    } catch (error) {
      console.error("Error fetching messages:", error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (date: string | Date) => {
    return new Date(date).toLocaleString();
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-32 flex items-center justify-center">
        <div className="text-white text-xl">Loading messages...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold gradient-text mb-8">
          Contact Messages
        </h1>

        {messages.length === 0 ? (
          <div className="glass rounded-3xl p-8 text-center">
            <p className="text-gray-300 text-lg">No messages yet.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message._id?.toString()}
                className="glass rounded-xl p-6 hover-lift"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {message.name}
                    </h3>
                    <p className="text-purple-400">{message.email}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400 text-sm">
                      {formatDate(message.timestamp)}
                    </p>
                    <span
                      className={`inline-block px-2 py-1 rounded-full text-xs ${
                        message.read
                          ? "bg-green-500/20 text-green-400"
                          : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {message.read ? "Read" : "Unread"}
                    </span>
                  </div>
                </div>

                <h4 className="text-lg font-semibold text-gray-200 mb-2">
                  {message.subject}
                </h4>

                <p className="text-gray-300 leading-relaxed">
                  {message.message}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
