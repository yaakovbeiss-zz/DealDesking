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

ActiveRecord::Schema.define(version: 20170918214158) do

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

  create_table "makes", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "year",       null: false
  end

  create_table "mileages", force: :cascade do |t|
    t.integer  "mileage",     null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.integer  "residual_id", null: false
  end

  create_table "models", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "make_id",    null: false
  end

  create_table "money_factors", force: :cascade do |t|
    t.integer  "term_id",      null: false
    t.float    "money_factor", null: false
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
    t.string   "doc_fee_plan"
    t.float    "down_payment"
    t.float    "drive_off"
    t.float    "monthly_payment"
    t.integer  "make_id",           null: false
    t.integer  "model_id",          null: false
    t.integer  "trim_id",           null: false
    t.index ["user_id"], name: "index_quotes_on_user_id", using: :btree
  end

  create_table "rebates", force: :cascade do |t|
    t.integer  "term_id",    null: false
    t.integer  "amount",     null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "residuals", force: :cascade do |t|
    t.integer  "term_id",    null: false
    t.float    "residual",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "terms", force: :cascade do |t|
    t.integer  "quote_id",   null: false
    t.integer  "months",     null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "trims", force: :cascade do |t|
    t.string   "name",       null: false
    t.integer  "model_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
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
