class User < ApplicationRecord
    has_secure_password
    has_many :requests, class_name: "Request", foreign_key: "owner_id"
    has_many :sent_messages, class_name: "Message", foreign_key: "sender_id"
    has_many :received_messages, class_name: "Message", foreign_key: "receiver_id"
validates :email, uniqueness: true
validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i

end
