class CreateProjects < ActiveRecord::Migration[7.0]
  def change
    create_table :projects do |t|
      t.string :name
      t.text :description
      t.date :due_date
      t.references :user, null: false, foreign_key: true
      t.boolean :completed

      t.timestamps
    end
  end
end
