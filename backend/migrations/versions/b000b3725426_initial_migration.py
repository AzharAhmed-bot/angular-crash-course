"""initial migration

Revision ID: b000b3725426
Revises: 
Create Date: 2024-01-09 11:58:27.072656

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b000b3725426'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('pets',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=64), nullable=False),
    sa.Column('image', sa.String(length=500), nullable=True),
    sa.Column('type', sa.Enum('Dog', 'Cat'), nullable=True),
    sa.Column('breed', sa.String(length=20), nullable=False),
    sa.Column('age', sa.Float(), nullable=False),
    sa.Column('price', sa.Float(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('pets')
    # ### end Alembic commands ###
