# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170823013650) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "leads", force: :cascade do |t|
    t.string   "name"
    t.string   "email"
    t.string   "phone_number"
    t.string   "address"
    t.integer  "user_id",      null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "quotes", force: :cascade do |t|
    t.integer  "user_id",           null: false
    t.integer  "lead_id"
    t.integer  "year"
    t.string   "make"
    t.string   "model"
    t.string   "trim"
    t.string   "title"
    t.integer  "msrp"
    t.integer  "sell_price"
    t.integer  "profit"
    t.integer  "rebate"
    t.float    "residual"
    t.float    "money_factor"
    t.integer  "months"
    t.float    "tax"
    t.integer  "bank_fee"
    t.float    "registration"
    t.integer  "doc_fee"
    t.integer  "smog"
    t.integer  "misc_fee"
    t.float    "rebate_tax"
    t.integer  "customer_cash"
    t.string   "bank_fee_plan"
    t.string   "registration_plan"
    t.string   "smog_plan"
    t.string   "misc_fee_plan"
    t.string   "rebate_tax_plan"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
    t.index ["user_id"], name: "index_quotes_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

end
