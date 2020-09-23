class Request < ApplicationRecord
    belongs_to :users, class_name: "User", foreign_key: "owner_id"
    validates :title, presence: true
    validates :description, presence: true
    validates :latitude, presence: true
    validates :longitude, presence: true
    validates :owner_id, presence: true
    validates :request_type, presence: true
end
