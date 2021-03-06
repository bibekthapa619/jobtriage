require 'bcrypt'

class User
  include Mongoid::Document
  include Mongoid::Timestamps
  include BCrypt

  before_create :generate_confirm_token

  field :email, type: String
  field :name, type: String
  field :password_hash, type: String
  field :email_confirmed, type: Boolean, default: false
  field :confirm_token, type: String
  field :reset_token, type: String

  has_many :applications, dependent: :destroy
  has_many :analyses, dependent: :destroy
  has_one :pitch, dependent: :destroy

  validates :email, uniqueness: { message: 'Email already registered' }, presence: true
  validates :name, presence: true

  def password
    @password ||= Password.new(password_hash)
  end

  def password=(new_password)
    @password = Password.create(new_password)
    self.password_hash = @password
  end

  def email_confirmed?
    return true unless ENV['USE_EMAIL_VERIFICATION']
    self.email_confirmed
  end

  def generate_confirm_token
    if self.confirm_token.blank?
      self.confirm_token = SecureRandom.urlsafe_base64.to_s
    end
  end

  def generate_reset_token
    self.reset_token = SecureRandom.hex(4)
  end
end
